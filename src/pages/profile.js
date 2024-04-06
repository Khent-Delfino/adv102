import { useState } from 'react';
import { app } from '../firebase/firebase';
import { getDatabase, ref, set } from 'firebase/database';

const ProfilePage = () => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	function writeUserData(title, description) {
		const db = getDatabase(app);
		set(ref(db, 'notes/' + title), {
			title: title,
			description: description,
		});
	}

	return (
		<>
			Profile Page
			<div className='h-[400px] w-[500px] bg-slate-400 p-3 flex flex-col gap-2'>
				<div className='flex'>
					<p className='basis-3'>Title:</p>{' '}
					<input
						value={title}
						onChange={(element) => setTitle(element.target.value)}
					/>
				</div>
				<div className='flex'>
					<p className='basis-[40px]'>Description:</p>{' '}
					<input
						multiple
						value={description}
						onChange={(element) => setDescription(element.target.value)}
					/>
				</div>

				<button
					className='bg-orange-200'
					onClick={() => writeUserData(title, description)}
				>
					Add Data
				</button>
			</div>
		</>
	);
};

export default ProfilePage;
