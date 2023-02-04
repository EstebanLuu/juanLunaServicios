import { Postblogs } from "../models/posts.js";
import { User } from "../models/users.js";
import { encrypt, compare } from "../helpers/handleBCrypt.js";

// USUARIOS

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const passwordHash = await encrypt(password);
    const newUser = await User.create({ name, email, password: passwordHash });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Este email no se encuentra registrado" });
    }
    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      res.send("Te has logueado correctamente");
    }
    if (!checkPassword) {
      res.status(409);
      res.send({ error: "contraseña incorrecta" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    console.log(Users);
    res.json(Users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) return res.send(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const upDateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findByPk(id);
    user.name = name;
    user.email = email;
    user.password = password;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POSTS

export const getPosts = (req, res) => {
  res.send("posts");
  try {
    console.log("alguien entro al post");
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = async (req, res) => {
  console.log(req.body);
  const { title, description, img } = req.body;
  try {
    const newPost = await Postblogs.create({
      title: title,
      description: description,
      img: img,
    });
    console.log(newPost);
    res.send("se creó el post");
  } catch (error) {
    console.log(error);
  }
};
