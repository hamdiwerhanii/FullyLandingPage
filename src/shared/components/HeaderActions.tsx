import Button from "@/shared/components/Button";
import { CTA_HREF, SIGN_IN_HREF } from "@/shared/constants/nav";
import { cn } from "@/shared/utils/cn";

type HeaderActionsProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function HeaderActions({ className, onNavigate }: HeaderActionsProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Button asChild variant="outline">
        <a href={SIGN_IN_HREF} onClick={onNavigate}>
          Sign in
        </a>
      </Button>
      <Button asChild variant="primary">
        <a href={CTA_HREF} onClick={onNavigate}>
          Create an account
        </a>
      </Button>
    </div>
  );
}
