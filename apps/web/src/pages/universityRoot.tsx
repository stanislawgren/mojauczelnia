import { useMemo, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getUniversityData } from '../services/universityService';
import { IUniversity } from '../interfaces/IUniversity';

export const UniversityRoot = () => {
    const { universityId } = useParams()
    const [university, setUniversity] = useState<IUniversity | undefined>()

    if (!universityId) {
        return ''
    }

    useMemo(()=>getUniversityData(universityId).then((data) => {setUniversity(data.data)}), [universityId])

    return (
        university ? <Outlet context={university} /> : <div>Loading...</div>
    );
};
