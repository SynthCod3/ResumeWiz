// TemplateSelection.tsx
import React from "react";

interface TemplateSelectionProps {
	onSelectTemplate: (templateId: string) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
	onSelectTemplate,
}) => {
	const templates = [
		{
			id: "template1",
			name: "Template 1",
			thumbnail: "template1-thumbnail.jpg",
		},
		{
			id: "template2",
			name: "Template 2",
			thumbnail: "template2-thumbnail.jpg",
		},
		// Add more templates as needed
	];

	return (
		<div>
			<h2>Select a Template</h2>
			<div>
				{templates.map((template) => (
					<div
						key={template.id}
						onClick={() => onSelectTemplate(template.id)}
					>
						<img src={template.thumbnail} alt={template.name} />
						<p>{template.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TemplateSelection;
