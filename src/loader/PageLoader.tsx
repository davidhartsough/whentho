import LogoIcon from "../icon/LogoIcon";
import "./loader.css";

export default function PageLoader() {
  return (
    <div className="loader">
      <div className="loader-logo">
        <LogoIcon size={128} />
        <div className="spinner" />
      </div>
    </div>
  );
}
