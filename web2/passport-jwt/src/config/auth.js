const passport = require("passport");
const { Strategy } = require("passport-local");
const { PrismaClient } = require("@prisma/client");
const { hash, verify } = require("argon2");
const prisma = new PrismaClient();

const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");

passport.use(
  "register",
  new Strategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    userRegister
  )
);
passport.use(
  "login",
  new Strategy(
    {
      usernameField: "email",
    },
    userLogin
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    userJWT
  )
);
async function userJWT({ id }, done) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return done("Bad Token", false);
    }

    return done(null, user);
  } catch (error) {
    done(error.message);
  }
}

async function userLogin(email, password, done) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return done("Bad Credentials", false);
    }
    let valid = await verify(user.password, password);
    if (!valid) {
      return done("Bad Credentials", false);
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
}

async function userRegister(req, _, password, done) {
  try {
    const user = await prisma.user.create({
      data: {
        ...req.body,
        password: await hash(password),
      },
    });
    done(null, user);
  } catch (e) {
    done(e);
  }
}
