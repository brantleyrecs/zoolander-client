/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStudent } from '../../utils/data/studentData';

export default function ViewStudent() {
  const [studentDetails, setStudentDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setStudentDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={studentDetails.image_url} alt={studentDetails.student_full_name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {studentDetails.student_full_name}
          </h5>
          Age: {studentDetails.age}
        </div>
      </div>
    </>
  );
}