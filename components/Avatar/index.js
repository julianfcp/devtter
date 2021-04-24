import { Image, Card } from "styles/components-Styles/Avatar-css";

export default function Avatar({ src, alt, withText, text }) {
  return (
    <Card>
      <Image src={src} alt={alt} title={alt} />
      {withText && <strong>{text}</strong>}
    </Card>
  );
}
