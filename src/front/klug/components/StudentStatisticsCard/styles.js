import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 5,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardItemLeftContainer: {
        flexDirection: 'row',
    },
    cardItemRightContainer: {
        minWidth: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    gradeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'stretch',
    },
});
 
export default styles;