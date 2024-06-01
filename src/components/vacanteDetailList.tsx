import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import VacanteDetailCard from './vacanteDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface Vacante {
    id: string;
    titulo: string;
    skills: string;
}

const VacanteDetailList: React.FC = () => {
    const [vacantes, setVacantes] = useState<Vacante[]>([]);

    useEffect(() => {
        const fetchVacantes = async () => {
            try {
                const vacantesCollection = collection(db, 'vacantes');
                const vacantesSnapshot = await getDocs(vacantesCollection);
                const vacantesList = vacantesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Vacante[];
                setVacantes(vacantesList);
            } catch (error) {
                console.error("Error fetching empleados: ", error);
            }
        };

        fetchVacantes();
    }, []);

    return (
        <>
        <FlatList
            data={vacantes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <VacanteDetailCard
                    key={item.id}
                    titulo={item.titulo}
                    skills={item.skills}
                />
            )}
        />
        </>
    );
};

export default VacanteDetailList;
