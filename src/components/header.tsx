import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/lib/session";
import UserHeaderLogout from "./user-header-logout";

const HeaderComponent = async ({
  typeHeader,
}: {
  typeHeader: "home" | "users";
}) => {
  const session = await getCurrentUser();

  return (
    <div className="flex justify-between py-6 border-b border-slate-300 bg-white px-6 items-center">
      {typeHeader === "home" ? (
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-1/4 select-none"
          width={100}
          height={24}
          priority
        />
      ) : typeHeader === "users" ? (
        <h1 className="text-xl font-bold">Profile</h1>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_12578)">
              <path
                d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.57 5.11 19.4 5.02 19.22 5.02C19.16 5.02 19.1 5.03 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75001 2 9.54001 2.18 9.51001 2.42L9.13001 5.07C8.52001 5.32 7.96001 5.66 7.44001 6.05L4.95001 5.05C4.89001 5.03 4.83001 5.02 4.77001 5.02C4.60001 5.02 4.43001 5.11 4.34001 5.27L2.34001 8.73C2.21001 8.95 2.27001 9.22 2.46001 9.37L4.57001 11.02C4.53001 11.34 4.50001 11.67 4.50001 12C4.50001 12.33 4.53001 12.66 4.57001 12.98L2.46001 14.63C2.27001 14.78 2.22001 15.05 2.34001 15.27L4.34001 18.73C4.43001 18.89 4.60001 18.98 4.78001 18.98C4.84001 18.98 4.90001 18.97 4.95001 18.95L7.44001 17.95C7.96001 18.35 8.52001 18.68 9.13001 18.93L9.51001 21.58C9.54001 21.82 9.75001 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.11 18.97 19.17 18.98 19.23 18.98C19.4 18.98 19.57 18.89 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM17.45 11.27C17.49 11.58 17.5 11.79 17.5 12C17.5 12.21 17.48 12.43 17.45 12.73L17.31 13.86L18.2 14.56L19.28 15.4L18.58 16.61L17.31 16.1L16.27 15.68L15.37 16.36C14.94 16.68 14.53 16.92 14.12 17.09L13.06 17.52L12.9 18.65L12.7 20H11.3L11.11 18.65L10.95 17.52L9.89001 17.09C9.46001 16.91 9.06001 16.68 8.66001 16.38L7.75001 15.68L6.69001 16.11L5.42001 16.62L4.72001 15.41L5.80001 14.57L6.69001 13.87L6.55001 12.74C6.52001 12.43 6.50001 12.2 6.50001 12C6.50001 11.8 6.52001 11.57 6.55001 11.27L6.69001 10.14L5.80001 9.44L4.72001 8.6L5.42001 7.39L6.69001 7.9L7.73001 8.32L8.63001 7.64C9.06001 7.32 9.47001 7.08 9.88001 6.91L10.94 6.48L11.1 5.35L11.3 4H12.69L12.88 5.35L13.04 6.48L14.1 6.91C14.53 7.09 14.93 7.32 15.33 7.62L16.24 8.32L17.3 7.89L18.57 7.38L19.27 8.59L18.2 9.44L17.31 10.14L17.45 11.27ZM12 8C9.79001 8 8.00001 9.79 8.00001 12C8.00001 14.21 9.79001 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"
                fill="#FF0057"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_12578">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Hai @{session?.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <UserHeaderLogout />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderComponent;
