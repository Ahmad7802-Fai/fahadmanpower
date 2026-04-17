import { Process } from "../types";

export default function ProcessStep({ step, title, description }: Process) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[var(--primary)]">
        {step}
      </div>
      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="text-sm text-[var(--text-muted)] mt-2">
        {description}
      </p>
    </div>
  );
}