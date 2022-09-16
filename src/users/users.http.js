const userControllers = require("./users.controllers");

const getAll = (req, res) => {
  userControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json({ items: response.length, users: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  userControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: `El usuario con el id ${id} no existe` });
    });
};

const register = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.name ||
    !data.gender ||
    !data.birthday_date ||
    !data.email ||
    !data.password ||
    !data.phone    
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        gender: "string",
        birthday_date: "DD/MM/YYYY",
        email: "examle@examle.com",
        password: "string",
        phone: "int",
      },
    });
  } else {
    userControllers.createUser(data)
      .then((response) => {
        res.status(201).json({
          message: `User created succesfully with id: ${response.id}`,
          user: response,
        });
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  userControllers
    .deleteUser(id)
    .then((response) => {
      if (response) {
        res.status(204).json();
      } else {
        res.status(400).json({ message: `Invalid Id` });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  
  if (!Object.keys(data).length) {
    return res.status(400).json({
      message: "At least one field must be filled",
      fields: {
        name: "string",
        gender: "string",
        birthday_date: "DD/MM/YYYY",
        email: "examle@examle.com",
        phone: "+521231231230",
        role: "normal",
        profile_image: "example.com/img/example.png",
      },
    });
  } else {
    userControllers
      .editUser(id, data)
      .then((response) => {
        if (response[0]) {
          return res.status(200).json({
            message: `User edited succesfully with id ${id}`,
          });
        } else {
          return res.status(404).json({ message: "Invalid id" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  }
};

const editMyUser = (req, res) => {
  const id = req.user.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({
      message: "At least one field must be filled",
      fields: {
        name: "string",
        gender: "string",
        birthday_date: "DD/MM/YYYY",
        email: "examle@examle.com",
        phone: "+521231231230",
        role: "normal",
        profile_image: "example.com/img/example.png",
      },
    });
  } else {
    userControllers
      .editMyUser(id, data, dataRoles)
      .then((response) => {
        if (response[0]) {
          return res.status(200).json({
            message: `User edited succesfully with id ${id}`,
          });
        } else {
          return res.status(404).json({ message: "Invalid id" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  }
};

const getMyUser = (req, res) => {
  const id = req.user.id;
  const data = userControllers.getUserById(id)
  res.status(200).json(data)
}

const removeMyUser = (req, res) => {
  const id = req.user.id;
  const data = userControllers.deleteUser(id);
  if (data) {
    res.status(204).json();
  } else {
    res.status(400).json({ message: "invalid id" });
  }
};

const postProfileImg = (req, res) => {
  const userId = req.user.id;
  //mi-sitio.com/api/v1/users/me/profile-img
  //localhost:8000/api/v1/users/me/profile-img

  const imgPath = req.hostname + ':8000' + '/api/v1/uploads/' + req.file.filename 

  const data = userControllers.editProfileImg(userId, imgPath)
  res.status(200).json(data)

}

module.exports = {
  getAll,
  getById,
  register,
  remove,
  edit,
  editMyUser,
  getMyUser,
  removeMyUser,
  postProfileImg,
};
