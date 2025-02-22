import { LucideIcon } from "lucide-react";
interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}
const ToolCard = ({ title, description, icon: Icon, onClick }: ToolCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 animate-fade-up"
    >
      <div className="rounded-full bg-accent p-3 mb-4 group-hover:scale-110 transition-transform duration-200">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </button>
  );
};
export default ToolCard;