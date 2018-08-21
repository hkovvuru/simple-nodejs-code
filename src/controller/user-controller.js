import User from '../model/model';

/**
 * @param req
 * @param res
 * return Get the user details
 */
const users = async (req, res) => {
  try {
    res.status(200).json(await User.find({}));
  } catch (err) {
    res.send(err);
  }
};

/**
 * @param req
 * @param res
 * return add the user data
 */
const addUsers = async (req, res) => {
  try {
    const pushUser = new User(req.body.user);
    res.status(200).json(await pushUser.save());
  } catch (err) {
    res.send(err);
  }
};

/**
 * @param req
 * @param res
 * return update the user data
 */
const updateUser = async (req, res) => {
  try {
    res.status(201).json(await User.findOneAndUpdate({ userid: req.params.id }, req.body.user));
  } catch (err) {
    res.send(err);
  }
};

/**
 * @param req
 * @param res
 * return delete the user data
 */
const deleteUser = async (req, res) => {
  try {
    res.status(200).json(await User.findOneAndRemove({ userid: req.params.id })).exec();
  } catch (err) {
    res.send(err);
  }
};

const UserControllerMethods = {
  users,
  addUsers,
  updateUser,
  deleteUser,
};

export default UserControllerMethods;
