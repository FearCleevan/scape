# compress_images.py
import os
import shutil
from PIL import Image

def move_existing_backups():
    """Move existing .backup files to the organized backup folder"""
    assets_path = r"src\assets"
    backup_root = r"src\backup"
    
    print("🔄 Moving existing backup files to organized location...")
    
    backup_files_found = 0
    backup_files_moved = 0
    
    # Walk through assets to find .backup files
    for root, dirs, files in os.walk(assets_path):
        for file in files:
            if file.endswith('.backup'):
                backup_file_path = os.path.join(root, file)
                backup_files_found += 1
                
                # Calculate where this backup should go in the organized structure
                relative_path = os.path.relpath(backup_file_path, assets_path)
                # Remove the .backup extension for the target path
                original_relative_path = relative_path.replace('.backup', '')
                target_backup_path = os.path.join(backup_root, original_relative_path)
                
                # Create target directory if needed
                target_dir = os.path.dirname(target_backup_path)
                os.makedirs(target_dir, exist_ok=True)
                
                try:
                    # Move the backup file
                    shutil.move(backup_file_path, target_backup_path)
                    backup_files_moved += 1
                    print(f"✅ Moved: {relative_path}")
                except Exception as e:
                    print(f"❌ Failed to move {relative_path}: {str(e)}")
    
    print(f"\n📊 Backup Cleanup Summary:")
    print(f"   • Found {backup_files_found} backup files")
    print(f"   • Moved {backup_files_moved} files to {backup_root}")
    
    return backup_files_found > 0

def compress_large_images():
    """Simple compression script for your assets folder with organized backups"""
    assets_path = r"src\assets"
    backup_root = r"src\backup"
    max_size_mb = 10
    quality = 85
    
    print(f"🔄 Scanning: {os.path.abspath(assets_path)}")
    
    if not os.path.exists(assets_path):
        print(f"❌ Assets folder not found at: {assets_path}")
        print("💡 Make sure you're running this from D:\\Projects\\scape")
        return
    
    # Create main backup folder
    os.makedirs(backup_root, exist_ok=True)
    
    compressed_count = 0
    total_files = 0
    
    # Walk through all subdirectories
    for root, dirs, files in os.walk(assets_path):
        for file in files:
            # Skip backup files
            if file.endswith('.backup'):
                continue
                
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                total_files += 1
                
                # Check file size
                file_size = os.path.getsize(file_path)
                
                if file_size > max_size_mb * 1024 * 1024:
                    print(f"📦 Compressing: {file}")
                    print(f"   Location: {os.path.relpath(file_path, assets_path)}")
                    print(f"   Size: {file_size/1024/1024:.2f}MB")
                    
                    try:
                        # Create backup path that mirrors original structure
                        relative_path = os.path.relpath(file_path, assets_path)
                        backup_path = os.path.join(backup_root, relative_path)
                        
                        # Create backup directory if needed
                        backup_dir = os.path.dirname(backup_path)
                        os.makedirs(backup_dir, exist_ok=True)
                        
                        # Copy original to backup location
                        shutil.copy2(file_path, backup_path)
                        print(f"   💾 Backed up to: {os.path.relpath(backup_path, '.')}")
                        
                        # Open and compress the original
                        with Image.open(file_path) as img:
                            if img.mode in ('RGBA', 'P', 'LA'):
                                img = img.convert('RGB')
                            
                            # Compress with quality adjustment
                            current_quality = quality
                            temp_path = file_path + '.temp'
                            
                            img.save(temp_path, 'JPEG', quality=current_quality, optimize=True)
                            new_size = os.path.getsize(temp_path)
                            
                            # Reduce quality if still too large
                            while new_size > max_size_mb * 1024 * 1024 and current_quality > 20:
                                current_quality -= 5
                                img.save(temp_path, 'JPEG', quality=current_quality, optimize=True)
                                new_size = os.path.getsize(temp_path)
                            
                            # Replace original with compressed version
                            os.replace(temp_path, file_path)
                        
                        compressed_count += 1
                        print(f"   ✅ Compressed to: {new_size/1024/1024:.2f}MB (quality: {current_quality})")
                        print()
                        
                    except Exception as e:
                        print(f"   ❌ Error: {str(e)}")
                        # Remove failed backup if created
                        if os.path.exists(backup_path):
                            os.remove(backup_path)
                        print()
    
    print("=" * 60)
    print(f"🎉 Compression Complete!")
    print(f"📊 Processed {total_files} images")
    print(f"📦 Compressed {compressed_count} large files")
    print(f"📁 All compressed files remain in their original locations")
    print(f"💾 Backups organized in: {backup_root}")

def cleanup_backups():
    """Remove backup folder"""
    backup_root = r"src\backup"
    if os.path.exists(backup_root):
        confirm = input(f"⚠️  Delete backup folder '{backup_root}'? (y/n): ").strip().lower()
        if confirm in ('y', 'yes'):
            shutil.rmtree(backup_root)
            print("✅ Backup folder deleted")
        else:
            print("❌ Cleanup cancelled")
    else:
        print("ℹ️  No backup folder found")

def remove_scattered_backups():
    """Remove all .backup files scattered in assets folder"""
    assets_path = r"src\assets"
    print("🔍 Searching for scattered backup files...")
    
    backup_files_found = 0
    backup_files_removed = 0
    
    for root, dirs, files in os.walk(assets_path):
        for file in files:
            if file.endswith('.backup'):
                backup_file_path = os.path.join(root, file)
                backup_files_found += 1
                
                try:
                    os.remove(backup_file_path)
                    backup_files_removed += 1
                    print(f"✅ Removed: {os.path.relpath(backup_file_path, assets_path)}")
                except Exception as e:
                    print(f"❌ Failed to remove {file}: {str(e)}")
    
    print(f"\n📊 Cleanup Summary:")
    print(f"   • Found {backup_files_found} backup files")
    print(f"   • Removed {backup_files_removed} files")
    
    return backup_files_found > 0

if __name__ == "__main__":
    print("🚀 Image Compression with Organized Backups")
    print("=" * 50)
    print("💡 This will:")
    print("   • Compress images >10MB in src/assets and subfolders")
    print("   • Move originals to src/backup/ (mirrored folder structure)")
    print("   • Keep compressed versions in original locations")
    print()
    print("1. Compress images (and organize backups)")
    print("2. Move existing backup files to organized location")
    print("3. Remove scattered backup files (clean assets folder)")
    print("4. Cleanup backups (delete backup folder)")
    print("5. Exit")
    
    choice = input("\nChoose option (1-5): ").strip()
    
    if choice == "1":
        # First, move any existing backups
        if move_existing_backups():
            print("\n" + "="*50)
        compress_large_images()
    elif choice == "2":
        move_existing_backups()
    elif choice == "3":
        remove_scattered_backups()
    elif choice == "4":
        cleanup_backups()
    else:
        print("❌ Operation cancelled")