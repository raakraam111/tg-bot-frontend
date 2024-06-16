import os

def generate_imports2(base_dir, output_file):
    with open(output_file, 'w') as f:
        imports = []
        exports = []

        for root, _, files in os.walk(base_dir):
            for file in files:
                if file.endswith(('png', 'jpg', 'jpeg', 'gif' )):
                    relative_path = os.path.relpath(os.path.join(root, file), base_dir)
                    file_name = os.path.splitext(file)[0]
                    dir_name = os.path.basename(root)
                    
                    # Construct the variable name
                    var_name = f"{dir_name}_{file_name}".replace('-', '_').replace(' ', '_')
                    
                    import_path = f"../{relative_path.replace(os.path.sep, '/')}"
                    imports.append(f"import {var_name} from '{import_path}';")
                    exports.append(var_name)

        f.write("\n".join(imports))
        f.write("\n\nexport default {\n")
        f.write(", ".join(exports))
        f.write("\n};")
        
def generate_imports(base_dir, output_file):
    print(base_dir)
    with open(output_file, 'w') as f:
        imports = []
        exports = []

        for root, _, files in os.walk(base_dir):
            for file in files:
                if file.endswith(('png', 'jpg', 'jpeg', 'gif'  )):
                    relative_path = os.path.relpath(os.path.join(root, file), base_dir)
                    var_name = os.path.splitext(file)[0]
                    var_name = var_name.replace('-', '_').replace(' ', '_')
                    import_path = f"../{relative_path.replace(os.path.sep, '/')}"
                    imports.append(f"import {var_name} from '{import_path}';")
                    exports.append(var_name)

        f.write("\n".join(imports))
        f.write("\n\nexport default {\n")
        f.write(", ".join(exports))
        f.write("\n};")

# Define the directories based on the current location of app.py
print(os.pardir)
source_directory = os.path.join(os.pardir, "src", "assets")  # Source directory
destination_directory = os.path.join(os.pardir )  # Destination directory

# Define the directories
base_dir = '/home/spyder/spyder-projects/upside-vault-web/miniApp/frontend/src/assets'  # Change this to the correct path if needed
output_file = '/home/spyder/spyder-projects/upside-vault-web/miniApp/frontend/imagesImport.js'

# Generate the imagesImport.js file
generate_imports2(base_dir, output_file)

print(f"{output_file} has been generated.")
