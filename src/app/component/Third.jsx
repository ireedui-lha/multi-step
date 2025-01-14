import Button from "./Button";
import Header from "./Header";

export default function Third({ current, setCurrent }) {
  return (
    <div>
      <Header />
      <Button current={current} setCurrent={setCurrent} />
    </div>
  );
}
