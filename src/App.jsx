import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
	},
];

export default function App() {
	return (
		<div>
			<Accordion />
		</div>
	);
}

function Accordion() {
	return (
		<div className="accordion">
			{faqs.map((item, id) => (
				<Item key={id} item={item} id={id} />
			))}
		</div>
	);
}

function Item({ item, id }) {
	const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
	return (
		<div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
			<div className="number">{id + 1}</div>
			<div className="title">{item.title}</div>
			<div className="icon">{ isOpen ? "-" : "+"}</div>
			{isOpen && (<div className="content-box">{item.text}</div>)}
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
};
