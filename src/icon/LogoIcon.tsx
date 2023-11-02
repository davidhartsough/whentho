export default function LogoIcon({ size = 192 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      viewBox="0 0 192 192"
      style={{ flex: "1 1 100%", width: size, height: size }}
    >
      <ellipse
        cx="96"
        cy="96"
        fill="#3df"
        stroke="#3df"
        strokeWidth="8"
        rx="88"
        ry="88"
      ></ellipse>
      <path
        fill="#0f8"
        d="M180 122l-60 57s25-6 40-22c14-14 20-36 20-36z"
      ></path>
      <path
        fill="#0f8"
        stroke="#0f8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        d="M180 122h-40a16 16 0 00-16 16v40M52 20v14c0 14.359 11.641 26 26 26 8.837 0 16 7.163 16 16 0 10 8 16 16 16 8.837 0 18-7.163 18-16 0-10 6-16 14-16h31M88 182v-34c0-8.837-7.163-16-16-16s-16-7.163-16-16v-8c0-8.837-7.163-16-16-16H10"
      ></path>
      <path
        fill="#0f8"
        stroke="#0f8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M8.552 89.842l80.862 93.649s-43.131-5.817-63.131-31.817S8.552 89.842 8.552 89.842zM52 20l124 40s-16-30-47-46c-32-16-78 6-78 6z"
      ></path>
      <path
        d="M96 188h0c50 0 92-40 92-92 0-50-40-92-92-92h0c28 22 45 55 45 92 0 36-16 70-45 92z"
        opacity="0.15"
      ></path>
      <path
        fill="none"
        stroke="#1f87ad"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        d="M96 42L96 96 132 116"
      ></path>
      <ellipse
        cx="96"
        cy="96"
        fill="none"
        stroke="#1f87ad"
        strokeWidth="8"
        rx="88"
        ry="88"
      ></ellipse>
    </svg>
  );
}
