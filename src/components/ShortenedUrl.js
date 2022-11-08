import Button from "./Button";

export default function ShortenedUrl(props) {
    return (
      <div className="Result-Shortened-Url">
        <span className="result-shortened-url__Old-Url">{props.oldUrl}</span>
        <hr className="result-shortened-url__Line-Diviser" />
        <span className="result-shortened-url__Url-Shortened">
          {props.urlShortened}
        </span>
        <Button type="button" className="result-shortened-url__Btn" title="Copy new url shortened">Copy</Button>
      </div>
    );
}