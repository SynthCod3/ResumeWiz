// TemplateSelection.tsx
import Navbar from "../../components/Navbar";
import styles from './index.module.css'
import template2 from '../../assets/Template 1.png'
import template1 from '../../assets/Template 2.png'
import template3 from '../../assets/Template 3.png'
import { useNavigate } from "react-router-dom";

// interface TemplateSelectionProps {
// 	onSelectTemplate: (templateId: string) => void;
// }

// const TemplateSelection: React.FC<TemplateSelectionProps> = (
	// {
	// onSelectTemplate,}
const TemplateSelection = (

	) => {

		const navigate = useNavigate();

	const templates = [
		{
			id: "template1",
			name: "Professional",
			thumbnail: template2,
		},
		{
			id: "template2",
			name: "Creative",
			thumbnail: template1,
		},
		,
		{
			id: "template3",
			name: "Minimalist",
			thumbnail: template3,
		},
		// Add more templates as needed
	];

	return (
		<>
		<Navbar />
		<div className={styles.templateWrapper}>
			<div className={styles.templateheading}>Select a Template</div>
			<div className={styles.templateContent}>
				{templates.map((template: any) => (
					<div
					key={template.id}
					// onClick={() => onSelectTemplate(template.id)}
					onClick={() => navigate('/editor')}
					>
						<p>{template.name}</p>
						<img src={template.thumbnail} alt={template.name} />
					</div>
				))}
			</div>
		</div>
		</>
	);
};

export default TemplateSelection;
