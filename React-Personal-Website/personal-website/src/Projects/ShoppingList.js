import { Image } from "react-bootstrap";

const ShoppingList = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/ShoppingList/tree/main/shoppingListApp/shopping/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <Image
                src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="Shopping List Application image"
              />
              <figcaption>shopping list application</figcaption>

              <div className="image__overlay">
                <div className="image__title">Shopping Application</div>
                <p className="image__description">
                  The source code for the user friendly shopping applicatiion
                  built using React JavaScript Library and Bootstrap Framework
                </p>
              </div>
            </div>
          </a>
          <div>
            <a
              className="right"
              href="https://reactshoppinglistapplication.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                console.log(
                  "When Clicked, it will send the person to live display"
                );
              }}
            >
              Live
            </a>
          </div>
        </ul>
      </figure>
    </div>
  );
};

export default ShoppingList;
