import Link from "next/link";

export const ProfileButton = () => (
  <Link className="button button-colored" href="/profile">
    <span className="font-futura_pt_bold text-sm">MY RADICAL</span>
    <svg
      className="w-2 h-3 fill-none stroke-current stroke-2"
      viewBox="0 0 7 10"
    >
      <path d="M1.4646 1.49451L5.00013 5.03004L1.4646 8.56557" />
    </svg>
  </Link>
);
