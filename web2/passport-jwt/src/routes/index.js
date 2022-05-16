const { sign } = require("jsonwebtoken");
const passport = require("passport");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "index" });
});

router.post("/login", (req, res) => {
  passport.authenticate("login", (err, user) => {
    try {
      if (err || !user) {
        return res.json({
          err,
        });
      }

      req.login(user, { session: false }, (error) => {
        if (error) {
          return res.json({
            error,
          });
        }

        const token = sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "1m",
          }
        );
        res.json({ token });
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })(req, res);
});

router.post(
  "/register",
  passport.authenticate("register", { session: false }),
  (req, res) => {
    res.json({ msg: "usuario creado", user: req.user });
  }
);

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
