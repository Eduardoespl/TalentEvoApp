import {db} from '../../firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

const getVacantes = async () => {
  try {
    const vacantesCollection = collection(db, 'vacantes');
    const vacantesSnapshot = await getDocs(vacantesCollection);
    const vacantesList = vacantesSnapshot.docs.map(doc => doc.data());
    return vacantesList;
  } catch (error) {
    console.error('Error fetching vacantes: ', error);
    throw error;
  }
};

export default getVacantes;
