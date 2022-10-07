import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';

export interface IIcon {
    type: typeof AntDesign | typeof FontAwesome | typeof FontAwesome5 |
    typeof Ionicons | typeof Feather | typeof MaterialCommunityIcons |
    typeof Entypo | typeof MaterialIcons | typeof SimpleLineIcons |
    typeof Octicons | typeof Foundation |
    //  typeof FontAwesome5Brands |
    typeof EvilIcons | typeof Fontisto | typeof Zocial;
    name: string;
    color?: string;
    size?: number;
    style?: object;
    onPress?: () => void;
    testID?: string;
}
export {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    // FontAwesome5Brands,
    EvilIcons,
    Fontisto,
    Zocial
}