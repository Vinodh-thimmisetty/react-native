import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlog, getAllBlogs, getBlog, removeAllBlogs, removeBlog, updateBlog } = useContext(BlogContext);

    const renderBlogs = ({ item, _ }) => {
        return (
            <ScrollView style={styles.listStyle}>
                <Text style={styles.titleStyle}>{item.id}.{item.title}
                    <TouchableOpacity onPress={() => removeBlog(item.id)} >
                        <Button style={styles.btnStyle}
                            title="X"
                            color="red" />
                    </TouchableOpacity> </Text>
                <Text style={styles.descriptionStyle}>{item.description}</Text>
            </ScrollView>
        );
    };

    return (
        <View>
            <TouchableOpacity onPress={() => addBlog({ title: 'My First Blog', description: 'Some Dummy Description' })} >
                <Button style={styles.btnStyle}
                    title="Add new Blog"
                    color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={removeAllBlogs} >
                <Button style={styles.btnStyle}
                    title="Remove All Blogs"
                    color="red" />
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={getAllBlogs} >
                <Button style={styles.btnStyle}
                    title="Get All BLogs" />
            </TouchableOpacity>
            <TouchableOpacity onPress={(id) => getBlog(id)} >
                <Button style={styles.btnStyle}
                    title="Get Blog"
                    color="red" />
            </TouchableOpacity>  
            <TouchableOpacity onPress={updateBlog} >
                <Button style={styles.btnStyle}
                    title="Update Blog"
                    color="red" />
            </TouchableOpacity> 
            <TouchableOpacity onPress={removeBlog} >
                <Button style={styles.btnStyle}
                    title="Remove a Blog"
                    color="red" />
            </TouchableOpacity> */}
            <FlatList
                keyExtractor={blog => blog.id}
                data={state}
                renderItem={renderBlogs}
            />
        </View>
    )
}

export default IndexScreen;

const styles = StyleSheet.create({

    listStyle: {
        marginLeft: 10
    },
    titleStyle: {
        // marginLeft: 10
    },
    descriptionStyle: {
        marginLeft: 10
    },
    btnStyle: {

    }
});
