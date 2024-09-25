const articles = [
    {
      id: "e9713e0d-7d39-49da-807f-ebf35374313b",
      trailer: false,
      title: "Lorem dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!",
      author: "Me",
    },
    {
      id: "2586752e-d5d7-4c8b-910e-09ac8435455f",
      trailer: false,
      title: "Numquam veniam",
      content:
        "Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?",
      author: "Me",
    },
    {
      id: "dec0f528-595d-47a8-8827-f99b54cdb419",
      trailer: false,
      title: "Adipisci",
      content:
        "Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.",
      author: "Me",
    },
    {
      id: "af906fb0-8772-4267-a0b3-5fd9c41ea4f5",
      trailer: false,
      title: "Maiores nihil",
      content:
        "Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?",
      author: "Me",
    },
    {
      id: "69f5c6ea-19c0-4f2a-bd0f-cf715d00bbce",
      trailer: true,
      title: "Obcaecati veniam",
      content:
        "Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit",
      author: "Me",
    },
    {
      id: "042048c9-5d74-4a93-bce6-7ec226c4f31c",
      trailer: true,
      title: "Distinctio pariatur",
      content:
        "Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.",
      author: "Me",
    },
    {
      id: "9e8c717a-be5a-4519-af49-6b554afb91b5",
      trailer: true,
      title: "Accusamus inventor",
      content:
        "Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.",
      author: "Me",
    },
  ];

const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const inputs = document.querySelectorAll("input");
const article = document.querySelector(".article");
const trailer = document.querySelector(".trailer");

button.addEventListener('click', function(event){
    event.preventDefault();
    const tab = {"id": self.crypto.randomUUID(), "trailer": inputs[2].checked, "title": inputs[0].value, "content": textarea.value, "author": inputs[1].value};
    articles.unshift(tab);
    console.log(articles);
    cy();

})

function cy() {
    article.innerHTML = "";
    trailer.innerHTML = "";
    articles.forEach(Element => {
        div = document.createElement("div");
        div.classList.add(Element.id);
    
        h2 = document.createElement("h2");
        h2.innerHTML = Element.title;
        div.appendChild(h2);
    
        span = document.createElement("span");
        span.innerHTML = Element.content;
        div.appendChild(span);
    
        p = document.createElement("p");
        p.innerHTML = Element.author;
        div.appendChild(p);
        if (Element.trailer == true) {
            trailer.append(div);
        } else {
            article.append(div);
        }
    });
}


