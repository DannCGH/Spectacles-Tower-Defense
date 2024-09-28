@component
export class NewScript extends BaseScriptComponent {
    private HP: number;

    onAwake() {
        this.HP = 3;
        print("Awake");
    }
    takeDamage() {
        this.HP--;
        print("HP: " + this.HP);
    }
}
