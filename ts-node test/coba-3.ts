const judulBootcamp: {
  [key: string]: string;
} = {
  backend: "Backend Developer dengan ExpressJS dan Typescript",
  frontend: "Frontend Developer dengan NextJS",
  fullstack: "Fullstack Developer dengan ExpressJS, Typescript dan NextJS",
};

for (const title in judulBootcamp) {
  console.log(`Judul Bootcamp: ${judulBootcamp[title]}`);
}

console.log("================================");

Object.keys(judulBootcamp).forEach((title, index) => {
  console.log(`${index + 1}. Judul Bootcamp: ${judulBootcamp[title]}`);
});
