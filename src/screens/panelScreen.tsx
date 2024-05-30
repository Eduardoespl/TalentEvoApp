// src/screens/PanelScreen.tsx
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import ChartComponent from "../components/chartComponent";
import Icon from 'react-native-vector-icons/MaterialIcons';
import EmpleadoCard from "../components/empleadoCard";
import VacanteCard from "../components/vacanteCard";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

type UserScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Empleado {
  id: string;
  nombre: string;
  apellido: string;
  posicion: string;
}

interface Vacante {
  id: string;
  titulo: string;
  skills: string;
}

function PanelScreen(): React.JSX.Element {
    const navigation = useNavigation<UserScreenNavigationProp>();
    const handleLogout = () => {
        navigation.navigate('Login');
    };

    const [empleados, setEmpleados] = React.useState<Empleado[]>([]);
    const [vacantes, setVacantes] = React.useState<Vacante[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
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
                console.error("Error fetching vacantes: ", error);
            }
        };

        const fetchData = async () => {
            setLoading(true);
            await Promise.all([fetchEmpleados(), fetchVacantes()]);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Loading...</Text>;
    }

    const renderEmpleadoCard = ({ item }: { item: Empleado }) => (
        <View style={styles.cardContainer}>
            <EmpleadoCard
                key={item.id}
                nombre={item.nombre}
                apellido={item.apellido}
                posicion={item.posicion}
            />
        </View>
    );

    const renderVacantesCard = ({ item }: { item: Vacante }) => (
        <View style={styles.cardContainer}>
            <VacanteCard
                key={item.id}
                titulo={item.titulo}
                skills={item.skills}
            />
        </View>
    );

    return (
        <View style={styles.main}>
            <View style={styles.top_nav}>
                <Text style={styles.title}>Progress</Text>
                <TouchableOpacity style={{ position: "absolute", top: 18, right: 15 }} onPress={handleLogout}>
                    <Icon name="logout" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={empleados}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <ChartComponent />
                        <Text style={styles.sectionTitle}>Empleados</Text>
                    </>
                }
                renderItem={renderEmpleadoCard}
                ListFooterComponent={
                    <>
                        <Text style={styles.sectionTitle}>Vacantes</Text>
                        <FlatList
                            data={vacantes}
                            keyExtractor={(item) => item.id}
                            renderItem={renderVacantesCard}
                        />
                    </>
                }
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#010104",
        height: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 20,
    },
    top_nav: {
        width: "100%",
        backgroundColor: "#010104",
    },
    sectionTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    listContent: {
        alignItems: 'center',
        paddingBottom: 20,
    }
});

export default PanelScreen;
