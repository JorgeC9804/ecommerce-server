let users = [
  {
    id: 1,
    name: "jorge",
    email: "jorgs705@gmail.com",
    user: "JorgeC",
    password: "2345",
  },
  {
    id: 2,
    name: "diana",
    email: "diana705@gmail.com",
    user: "DianaS",
    password: "2345",
  },
  {
    id: 3,
    name: "Daniela",
    email: "daniela705@gmail.com",
    user: "DanielaC",
    password: "2345",
  },
];

// http GET
exports.getUsers = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};

// http GET ID
exports.getIdUsers = (req, res, next) => {
  const { id } = req.params;

  const user = users.find(element => element.id === +id);

  console.log(user);

  if (!user) {
    return res.status(400).json({
      status: "error",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

// http POST
exports.postUsers = async (req, res, next) => {
  const { name, email, user, password } = req.body;

  console.log("user create");

  let id = users.length + 1;

  users = [
    ...users,
    {
      id,
      name,
      email,
      user,
      password,
    },
  ];

  res.status(201).json({
    status: "succes",
    data: {
      id,
      name,
      email,
      user,
      password,
    },
  });
};
