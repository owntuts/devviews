<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Proxy Pattern</h5></summary>

The Proxy pattern allows us to create an intermediary that acts as an interface to another resource, while also hiding the underlying complexity of the component. ***A proxy is a class that is used to interface something else***. It can be used for various purposes, such as lazy initialization, remote access, or protection.

A real life example of the Proxy pattern is When an organization needs to fill a vacancy, they typically receive hundreds of resumes from job applicants. It would be impractical for the hiring manager to review every single resume, so they delegate this responsibility to a recruiting agency. ***The recruiting agency acts as a Proxy between the hiring manager and the job candidates***.

![proxy](/img/interviews/design-system/proxy.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

:::note Tips

Proxy = wrapping an object + overwriting (extending) the object's behavior by doing some extra jobs (validate, secure, caching,..) then delegate main jobs to the wrapped object.

:::

```java
// This is the Subject interface
interface JobCandidate {
    void interview();
}

// This is the Real Subject class
class RealJobCandidate implements JobCandidate {
    private String name;
    private String[] skills;

    public RealJobCandidate(String name, String[] skills) {
        this.name = name;
        this.skills = skills;
    }

    @Override
    public void interview() {
        System.out.println(name + " is being interviewed by the hiring manager.");
    }
}

// This is the Proxy class
class RecruitingAgency implements JobCandidate {
    private RealJobCandidate candidate;

    public RecruitingAgency(String name, String[] skills) {
        this.candidate = new RealJobCandidate(name, skills);
    }

    @Override
    public void interview() {
        validateResume();
        candidate.interview();
    }

    private void validateResume() {
        System.out.println("Validating the job candidate's resume");
        // perform validation logic here 
    }
}

// This is the Client class
public class HiringManager {
    public static void main(String[] args) {
        JobCandidate jobCandidate1 = new RecruitingAgency("John Doe", new String[]{"Java", "SQL", "Python", "C++"});
        JobCandidate jobCandidate2 = new RecruitingAgency("Jane Smith", new String[]{"PHP", "JavaScript", "Ruby"});

        jobCandidate1.interview(); // This will validate John Doe's resume and then schedule an interview with the hiring manager
        jobCandidate2.interview(); // This will validate Jane Smith's resume and then schedule an interview with the hiring manager
    }
}

```

</details>
