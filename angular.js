//filter array, get unique objects based on prop value

var uniqueAccountTypes = [];
uniqueAccountTypes = vm.accounts.map(item => item.typeCode)
    .filter((value, index, self) => self.indexOf(value) === index)


//filter array on another array, get all objects, that are not in another array, based on prop value

vm.missingAccountTypes = vm.accountTypes.filter(function (item) {
    return uniqueAccountTypes.indexOf(item.typeCode) === -1;
});
