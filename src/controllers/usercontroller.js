import user from "../db/models/usermodel";
const { ObjectId } = require("mongodb");

export const user_request = {
  getAllUsers: async (req, res) => {
    await user.find({}, (error, result) => {
      return new Promise((resolve, reject) => {
        return error ? reject(res.json(error)) : resolve(res.json(result));
      });
    });
  },
  createUser: async (req, res) => {
    console.log("req body", req.body.email_id, req.body);
    if (req.body && req.body.email_id !== undefined) {
      const user_exist = await user.find(
        { email_id: req.body.email_id },
        (error, result) => {
          return new Promise((resolve, reject) =>
            error ? reject(error) : resolve(result)
          );
        }
      );
      console.log("user_exist", user_exist);
      if (user_exist.length === 0) {
        await user(req.body)
        .save()
        .then((result) => {
          return res.json(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      res.json({ message: "User exist already." });
    }
    } else {
      res.json({ message: "Please fill user detail first." });
    }
  },
  updateUserDetails: async (req, res) => {
    let payload = req.body;
    let userId = ObjectId(`${req.body._id}`);
    console.log("payload",payload);
    await user
      .findOneAndUpdate({ _id: userId }, { $set: payload })
      .then((result) => {
        console.log("RESULT :: ", result);
        res.json(result);
      })
      .catch((error) => {
        console.log("ERROR :: ", error);
        res.json({ err: error });
      });
  },
  getAllPostsByUser: async (req, res) => {
    console.log("req body ::", req.body);
    await user
      .findById({ _id: req.body._id })
      .populate("posts")
      .exec(function (err, story) {
        if (err) res.json({ err: err });
        res.json(story);
      });
  },
};
