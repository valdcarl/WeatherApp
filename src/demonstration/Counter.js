// demonstration file for using 'State'
import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count Changed`)
        return () => {
            console.log('useeffect cleanup')
        }
    }, [count] )
    //let count = 0
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {`count: ${count}`} </Text>
                <Button 
                    color={'red'} 
                    title={'Increase count'} 
                    onPress={() => { 
                        setCount(count + 1)
                    }}
                />
                <Button 
                    color={'green'} 
                    title={'Decrease count'} 
                    onPress={() => { 
                        setCount(count - 1)
                    }}
                />
                <Button 
                    color={'red'} 
                    title={'Increase count'} 
                    onPress={() => { 
                        setNewCount(count + 1)
                    }}
                />
                <Button 
                    color={'green'} 
                    title={'Decrease count'} 
                    onPress={() => { 
                        setNewCount(count - 1)
                    }}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})
export default Counter