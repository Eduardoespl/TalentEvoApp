// chartComponent.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface Course {
    id: string;
    times: number;
    title: string;
}

const ChartComponent: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesCollection = collection(db, 'cursos');
                const coursesSnapshot = await getDocs(coursesCollection);
                const coursesList = coursesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    times: doc.data().times,
                })) as Course[];
                setCourses(coursesList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching courses: ", error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Loading...</Text>;
    }

    const chartData = {
        labels: courses.map(course => course.title),
        datasets: [
            {
                data: courses.map(course => course.times),
            },
        ],
    };

    return (
        <View>
            <Text style={styles.title}>Course Popularity</Text>
            <LineChart
                data={chartData}
                width={Dimensions.get('window').width - 20} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 10,
                    },
                }}
                bezier
                style={{

                    borderRadius: 10,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default ChartComponent;
