function solution(new_id) {
    let modified_id = new_id.toLowerCase();
    
    modified_id = modified_id.replace(/[^a-z0-9._-]/g, '');
    
    modified_id = modified_id.replace(/\.{2,}/g, '.');
    
    modified_id = modified_id.replace(/^\.|\.$/g, '');
    
    if (!modified_id) {
       modified_id = 'a'; 
    }
    
    if (modified_id.length >= 16) {
        modified_id = modified_id.slice(0, 15);
        modified_id = modified_id.replace(/\.$/, '');
    }
    
    while (modified_id.length < 3) {
        modified_id += modified_id[modified_id.length - 1];
    }
    
    return modified_id;
}
