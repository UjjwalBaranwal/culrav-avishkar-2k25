const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.createAndSendToken = (user) => {
  const token = signToken(user._id);
  const cookiOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookiOption.secure = true;

  ///// remove the  user password from the output
  user.password = undefined;

  //   res.cookie("jwt", token, cookiOption);
  //   res.status(statusCode).json({
  //     status: "success",
  //     token,
  //     data: {
  //       user,
  //     },
  //   });
  return token, user;
};
