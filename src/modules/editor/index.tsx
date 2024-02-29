import { useState } from "react";
import styles from "./index.module.css";

const ResumeEditor = () => {
	
	const [data, setData] = useState({
		name: "John Doe",
		title: "Software Engineer",
		email: "",
		phone: "",
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
					<span>Name</span>
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
					<span>Title</span>
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
					<span>Email</span>
					<input
						type="text"
						value={data.email}
						onChange={(e) => {
							setData({
								...data,
								email: e.target.value,
							});
						}}
					/>
					<span>Phone</span>
					<input
						type="text"
						value={data.phone}
						onChange={(e) => {
							setData({
								...data,
								phone: e.target.value,
							});
						}}
					/>
					<span>Bio</span>
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
						<div>{data.email}</div>
						<div>{data.phone}</div>
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
