public class Module {
    private int id;
    private String name;
    private String programmeDirector;
    private double labGrade;
    private double theoryTest;
    private double finalExam;

    // Constructor
    public Module(int id, String name, String programmeDirector, double labGrade, double theoryTest, double finalExam) {
        this.id = id;
        this.name = name;
        this.programmeDirector = programmeDirector;
        this.labGrade = labGrade;
        this.theoryTest = theoryTest;
        this.finalExam = finalExam;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getProgrammeDirector() {
        return programmeDirector;
    }

    public double getLabGrade() {
        return labGrade;
    }

    public double getTheoryTest() {
        return theoryTest;
    }

    public double getFinalExam() {
        return finalExam;
    }

    // Method to display module information
    public void displayInfo() {
        System.out.println("Module ID: " + id);
        System.out.println("Module Name: " + name);
        System.out.println("Programme Director: " + programmeDirector);
        System.out.println("Lab Grade: " + labGrade + "%");
        System.out.println("Theory Test: " + theoryTest + "%");
        System.out.println("Final Exam: " + finalExam + "%");
    }

    // Main method for testing
    public static void main(String[] args) {
        Module module1 = new Module(101, "Introduction to Programming", "Dr. Jane Smith", 85, 90, 88);
        module1.displayInfo();
    }
}
