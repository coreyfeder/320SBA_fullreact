#! $SHELL

go() { npm run ${1:-dev}; }

comp() {
    local componentName="${1:0:1:u}${1:1}"
    print "Setting up component $componentName"
    [[ "$(basename $PWD)" == "components" ]] || { print "run from components directory" ; return 1 ; }
    mkdir "$componentName"

    for file in __/*; do
        cat file | sed "s/__/${componentName}/gf" > "${componentName}/${componentName}.jsx"
    done
}
