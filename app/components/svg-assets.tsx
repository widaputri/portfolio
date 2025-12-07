// GitHub Icon SVG
export const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

// LinkedIn Icon SVG
export const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
      fill="currentColor"
    />
  </svg>
);

// Mail Icon SVG
export const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
      fill="currentColor"
    />
  </svg>
);

// Ornament SVG
export const OrnamentSVG = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="176"
    height="110"
    viewBox="0 0 176 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M88 0L88 20C88 20 75 30 60 45C45 60 40 70 40 70M88 20C88 20 101 30 116 45C131 60 136 70 136 70M40 70C40 70 35 80 25 90M40 70C40 70 45 80 40 90M136 70C136 70 141 80 151 90M136 70C136 70 131 80 136 90M88 90L88 110"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Decorative wave/curve vectors
export const DecorativeVector1 = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="289" height="400" viewBox="0 0 289 400" fill="none">
    <path
      d="M0 0C50 50 100 100 144.24 200C188.48 300 238.48 350 288.48 399.64"
      stroke="rgba(255, 255, 255, 0.2)"
      strokeWidth="40"
      strokeLinecap="round"
    />
  </svg>
);

export const DecorativeVector2 = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="289" height="400" viewBox="0 0 289 400" fill="none">
    <path
      d="M288.48 0C238.48 50 188.48 100 144.24 200C100 300 50 350 0 399.64"
      stroke="rgba(255, 255, 255, 0.2)"
      strokeWidth="40"
      strokeLinecap="round"
    />
  </svg>
);
