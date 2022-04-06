const axios = require('axios');
const User = require('../models/users');
const logStrength = require('../helpers/loginStrength');

// @DESK        Fetch from randomuser.me API
// @ROUTES          /api/users/import/
// @ANSWER OF   ------ EXERCICE 1 ----------

exports.getFetchRandomUser = async (req, res, next) => {
  try {
    let { seed, country, count } = req.query;

    const result = await axios.get(
      `https://randomuser.me/api/1.2/?seed=${seed}&nat=${country}&results=${count}`
    );

    if (!seed || !country) {
      console.log('ok');
    }

    // Insert data localy into database
    await User.insertMany(result.data.results);

    return res.status(200).json({
      success: true,
      data: result.data.results,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// @DESK          Get all users from database
// @ROUTES              /api/users/
// @ANSWER     ---------- EXERCICE 2, 6 -------------

exports.getAllUsers = async (req, res, next) => {
  // show specific data from database ***** EXERCICE 2 *******

  // const users = await User.find().select(
  //   'name email login.uuid login.username registered picture.thumbnail'
  // );
  // ********* EXERICE 6 ********
  const users = await User.find().select(
    'name email login.uuid login.username login.password registered picture.thumbnail'
  );

  if (!users) {
    return res.status(500).send('erreur');
  }

  const data = users.map((user) => ({
    ...user._doc,
    login: {
      ...user.login,
      passwordStrength: logStrength(user.login.password),
    },
  }));

  return res.status(200).json({
    succcess: true,
    data: data,
  });
};

// @DESK             Get users  by login.uuid
// @ROUTES              /api/users/uuid
// @ANSWER       ------------ EXERCICE 4, 6 --------------

exports.getByUuid = async (req, res, next) => {
  const user = await User.findOne({ 'login.uuid': req.params.id });

  if (!user) {
    return res.status(500).send('No user for this id');
  }

  let test_regex = logStrength(user.login.password);

  let newData = {
    ...user._doc,
    login: { ...user.login, passwordStrength: test_regex },
  };
  console.log(newData);
  return res.status(200).json({
    succcess: true,
    data: newData,
  });
};

// @DESK        Fetch from randomuser.me API by specifique query
// @ROUTES          /api/users/
// @ANSWER OF   ------ EXERCICE 7 -----------

exports.getUsersByquery = async (req, res, next) => {
  const value = await User.find(JSON.parse(req.query));

  console.log(req.query);
  // console.log(Object.keys(value))
  if (!value) {
    return res.status(500).send('Error');
  }
  return res.status(200).json({
    success: true,
    data: value,
  });
};
