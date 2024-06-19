import os
import sys

def create_files(component_name):
    # Base paths for directories
    base_directories = {
        'components': 'src/components',
        'css': 'src/css',
        'constants': 'src/constants'
    }

    # Ensure all directories exist
    for key in base_directories:
        os.makedirs(base_directories[key], exist_ok=True)

    # File paths for each type of file
    file_paths = {
        'jsx': os.path.join(base_directories['components'], f"{component_name}.jsx"),
        'css': os.path.join(base_directories['css'], f"{component_name}.css"),
        'js': os.path.join(base_directories['constants'], f"{component_name}.js")
    }

    # Write JSX file with React import and CSS import
    with open(file_paths['jsx'], 'w') as file:
        file.write(
            f"""import React from 'react';\n"""
            f"""import '../css/{component_name}.css';\n\n"""
            f"""const {component_name} = () => {{\n"""
            f"""    return <div className="{component_name.lower()}"></div>;\n"""
            f"""}};\n\n"""
            f"""export default {component_name};\n"""
        )

    # Write CSS file with basic styling placeholder
    with open(file_paths['css'], 'w') as file:
        file.write(
            f"""/* Styles for {component_name} */\n"""
            f""".{component_name.lower()} {{\n"""
            f"""    /* Add your styles here */\n"""
            f"""}}\n"""
        )

    # Write Constants JS file with placeholder comment
    with open(file_paths['js'], 'w') as file:
        file.write(
            f"""// Constants for {component_name}\n"""
        )

    print(f"Files created successfully for component '{component_name}'")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python create.py ComponentName")
    else:
        create_files(sys.argv[1])
