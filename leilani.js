const title = "id=2&title=New post&content=this is a new post snnsnsnsn";

let info = [
  {
    id: 1,
    title: "element one",
    content: "resumen of a first element",
  },
];

const handleAdd = information => {
  const response = information.split("&");
  const [id, title, content] = response;
  const idValue = +id.split("=")[1];
  const titleValue = title.split("=")[1];
  const contentValue = content.split("=")[1];

  info = [
    ...info,
    {
      id: idValue,
      title: titleValue,
      content: contentValue,
    },
  ];
};

// handleAdd(title);

// console.log(info);

// const Ali = { a: 1, b: 2, c: 3 };

const Ali = [1, 2, 3, 4, 5, 6];

for (const prop in Ali) {
  /**
   * es como pasarle a prop la inicializacion igual a cero
   * y las propiedades
   */

  console.log(prop);
}
