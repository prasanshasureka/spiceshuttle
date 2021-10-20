<View style={{alignItems:'flex-start', justifyContent: 'space-around', margin:15, flexDirection: 'row', marginTop: 50}}>
                <TouchableOpacity onPress={() => Communications.phonecall('7003991700',true)}> 
                    <View >
                        <Image
                        source={CallUs}
                        style={{height: 35, width: 35}}/>
                    </View>
                
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.email(['harsh.mayank40@gmail.com'],null,null, null, 'Issue')}> 
                    <View >
                        <Image
                        source={Email}
                        style={{height: 35, width: 35}}/>
                    </View>
                
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=&phone=919163228734')}> 
                    <View >
                        <Image
                        source={Whatsapp}
                        style={{height: 35, width: 35}}/>
                    </View>
                
                </TouchableOpacity>
                </View>