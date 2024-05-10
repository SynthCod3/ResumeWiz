import styles from './index.module.css'


const Template4 = () => {
  return (
    <div className="border w-[2480px]! h-[3508px]! bg-background">
      <div id="resume" className="min-w-[2480px] min-h-[3508px]">
        <div className={styles.Header}>
          <div className={styles.imageouter}>
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt=""
            />
          </div>
          <div className={styles.Content}>
            <div className={styles.top}>
              <h1>DENICE HARRIS</h1>
              <p>Senior Graphic Design Specialist</p>
            </div>
            <div className={styles.social}>
              <label htmlFor="">
                <h3>PHONE</h3>
                <p>(212) 256-1414</p>
              </label>{' '}
              <label htmlFor="">
                <h3>EMAIL</h3>
                <p>deniceharris@gmail.com</p>
              </label>{' '}
              <label htmlFor="">
                <h3>WEBSITE</h3>
                <p>deniceharris.com</p>
              </label>{' '}
              <label htmlFor="">
                <h3>ADDRESS</h3>
                <p>Chicago, Illinois</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
