import {db} from '../../firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

const getEmpleados = async () => {
  try {
    const empleadosCollection = collection(db, 'empleados');
    const empleadosSnapshot = await getDocs(empleadosCollection);
    const empleadosList = empleadosSnapshot.docs.map(doc => doc.data());
    return empleadosList;
  } catch (error) {
    console.error('Error fetching empleados: ', error);
    throw error;
  }
};

export default getEmpleados;
