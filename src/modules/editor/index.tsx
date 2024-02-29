import { useState } from "react";
import styles from "./index.module.css";

const ResumeEditor = () => {
	const [data, setData] = useState({
		name: "John Doe",
		title: "Software Engineer",
		contact: [
			{
				type: "email",
				value: "john@example.com",
			},
			{
				type: "website",
				value: "www.johndoe.com",
			},
		],
		bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		experience: [
			{
				company: "Google",
				jobTitle: "Software Engineer",
				startDate: "2020",
				endDate: "Present",
				description: "Lorem ipsum dolor sit amet.",
			},
			{
				company: "Facebook",
				jobTitle: "Software Engineer",
				startDate: "2020",
				endDate: "Present",
				description: "Lorem ipsum dolor sit amet.",
			},
		],
		education: [
			{
				institution: "University of California",
				course: "Bachelor of Science",
				startDate: "2020",
				endDate: "Present",
				description: "Lorem ipsum dolor sit amet.",
			},
		],
		skills: [
			{
				name: "HTML",
				value: "80",
			},
			{
				name: "CSS",
				value: "70",
			},
			{
				name: "JavaScript",
				value: "60",
			},
		],
	});

	return (
		<div>
			<div className={styles.editorWrapper}>
				<div className={styles.editor}>
					<input
						type="text"
						value={data.name}
						onChange={(e) => {
							setData({
								...data,
								name: e.target.value,
							});
						}}
					/>
					<input
						type="text"
						value={data.title}
						onChange={(e) => {
							setData({
								...data,
								title: e.target.value,
							});
						}}
					/>
					<input
						type="text"
						value={data.contact[0].value}
						onChange={(e) => {
							setData({
								...data,
								contact: [
									{
										type: "email",
										value: e.target.value,
									},
								],
							});
						}}
					/>
					<input
						type="text"
						value={data.contact[1].value}
						onChange={(e) => {
							setData({
								...data,
								contact: [
									{
										type: "website",
										value: e.target.value,
									},
								],
							});
						}}
					/>

					<textarea
						value={data.bio}
						onChange={(e) => {
							setData({
								...data,
								bio: e.target.value,
							});
						}}
					/>
				</div>
				<div className={styles.previewContent}>
					<div>
						<div>{data.name}</div>
						<div>{data.title}</div>
					</div>
					<div>
						{data.contact.map((item) => (
							<div key={item.type}>
								{item.type}: {item.value}
							</div>
						))}
					</div>
					<div>{data.bio}</div>
					<hr />
					<h2>Experience</h2>
					<div>
						{data.experience.map((item) => (
							<div key={item.company}>
								<div>{item.company}</div>
								<div>{item.jobTitle}</div>
								<div>
									{item.startDate} - {item.endDate}
								</div>
								<div>{item.description}</div>
							</div>
						))}
					</div>
					<hr />
					<h2>Education</h2>
					<div>
						{data.education.map((item) => (
							<div key={item.institution}>
								<div>{item.institution}</div>
								<div>{item.course}</div>
								<div>
									{item.startDate} - {item.endDate}
								</div>
								<div>{item.description}</div>
							</div>
						))}
					</div>
					<hr />
					<h2>Skills</h2>
					<div>
						{data.skills.map((item, index) => (
							<div key={index}>
								<div>{item.name}</div>
								<div>{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeEditor;
