import { is } from "@deepkit/type";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TemplateConstant = _test_deepkit_is(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => is<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);