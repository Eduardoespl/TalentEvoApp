import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import EmpleadoDetailCard from './empleadoDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface Empleado {
    id: string;
    nombre: string;
    apellido: string;
    posicion: string;
}

const EmpleadoDetailList: React.FC = () => {
    const [empleados, setEmpleados] = useState<Empleado[]>([]);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const empleadosCollection = collection(db, 'empleados');
                const empleadosSnapshot = await getDocs(empleadosCollection);
                const empleadosList = empleadosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Empleado[];
                setEmpleados(empleadosList);
            } catch (error) {
                console.error("Error fetching empleados: ", error);
            }
        };

        fetchEmpleados();
    }, []);

    return (
        <>
        <FlatList
            data={empleados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <EmpleadoDetailCard
                    key={item.id}
                    nombre={item.nombre}
                    apellido={item.apellido}
                    posicion={item.posicion}
                />
            )}
        />
        </>
    );
};

export default EmpleadoDetailList;
